import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DecimalPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { DxButtonModule, DxLoadIndicatorModule, DxProgressBarModule } from "devextreme-angular";
import {MeIconComponent} from "../me-icon/me-icon.component";

type FileStatus = 'ready' | 'uploading' | 'uploaded' | 'error';

interface FileWrapper {
  file: File;
  status: FileStatus;
  progress: number;
  error?: string;
}

@Component({
  selector: 'me-file-uploader',
  templateUrl: './me-file-uploader.component.html',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MeFileUploaderComponent),
      multi: true
    }
  ],
  imports: [
    NgIf,
    NgForOf,
    DxLoadIndicatorModule,
    NgSwitchCase,
    NgSwitch,
    DxButtonModule,
    DxProgressBarModule,
    DecimalPipe,
    MeIconComponent
  ],
  styles: [`
    .file-uploader {
      border: 1px dashed #d3d3d3;
      border-radius: 4px;
      padding: 20px;
      font-family: 'Roboto', sans-serif;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .file-uploader.drag-over {
      border-color: #1890ff;
      background-color: #f0f8ff;
    }

    .file-uploader p {
      margin-bottom: 15px;
      color: #606060;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    .file-list {
      margin-top: 20px;
    }

    .file-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
    }

    .file-details {
      display: flex;
      align-items: center;
    }

    .file-info {
      display: flex;
      flex-direction: column;
    }

    .file-name {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 4px;
    }

    .file-size {
      color: #8c8c8c;
      font-weight: 400;
      font-size: 12px;
      margin-left: 10px;
    }

    .file-status {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: #ff4d4f;
    }

    .file-actions {
      display: flex;
      align-items: center;
    }

    .file-actions .me-icon-cancel {
      color: #ff0000;
      cursor: pointer;
    }

    .allowed-extensions {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #606060;
      margin-top: 5px;
    }

    .allowed-extensions .extensions {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #000000;
    }


  `]
})
export class MeFileUploaderComponent implements ControlValueAccessor {
  @Input() allowedFileExtensions: string[] = [];
  @Input() maxFileSize: number = 0;
  @Input() minFileSize: number = 0;
  @Input() multiple: boolean = false;
  @Input() labelText: string = 'Перетащите сюда файлы для загрузки или выберите на устройстве';
  @Input() selectButtonText: string = 'Выбрать файлы';
  @Input() showFileList: boolean = true;

  @Output() fileAdded = new EventEmitter<File>();
  @Output() fileRemoved = new EventEmitter<File>();
  @Output() allFilesRemoved = new EventEmitter<void>();
  @Output() invalidFile = new EventEmitter<{ file: File, error: string }>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  files: FileWrapper[] = [];
  dragOver = false;
  validFileType = true; // Новое свойство для отслеживания валидности типа файла

  private onChange = (files: File[]) => {};
  private onTouched = () => {};

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  handleFiles(fileList: FileList): void {
    this.validFileType = true; // Сбрасываем валидность перед проверкой новых файлов
    const newFiles = Array.from(fileList).map(file => {
      const extensionError = this.isInvalidFileExtension(file);
      const sizeError = this.isInvalidFileSize(file);
      if (extensionError || sizeError) {
        this.validFileType = false; // Устанавливаем валидность в false при обнаружении ошибки
        const errorMessage = extensionError || sizeError || 'Unknown error';
        this.invalidFile.emit({ file, error: errorMessage });
        return { file, status: 'error' as const, progress: 0, error: errorMessage };
      }
      this.fileAdded.emit(file);
      return { file, status: 'ready' as const, progress: 0 };
    });
    this.files.push(...newFiles);
    this.onChange(this.files.map(f => f.file));
  }

  isInvalidFileExtension(file: File): string | undefined {
    if (!Array.isArray(this.allowedFileExtensions) || this.allowedFileExtensions.length === 0) {
      return undefined;
    }

    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!extension || !this.allowedFileExtensions.includes(extension)) {
      return `File type is not allowed.`;
    }
    return undefined;
  }

  isInvalidFileSize(file: File): string | undefined {
    if (this.maxFileSize && file.size > this.maxFileSize) {
      return `File is too large. Maximum file size: ${this.maxFileSize / (1024 * 1024)} MB.`;
    }
    if (this.minFileSize && file.size < this.minFileSize) {
      return `File is too small. Minimum file size: ${this.minFileSize / 1024} KB.`;
    }
    return undefined;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  removeFile(index: number): void {
    const removedFile = this.files[index].file;
    this.files.splice(index, 1);
    this.onChange(this.files.map(f => f.file));
    this.fileRemoved.emit(removedFile);
    if (this.files.length === 0) {
      this.allFilesRemoved.emit();
    }
  }

  removeAllFiles(): void {
    this.files = [];
    this.onChange([]);
    this.allFilesRemoved.emit();
  }

  updateFileStatus(file: File, status: FileStatus, progress: number = 0, error?: string): void {
    const fileWrapper = this.files.find(fw => fw.file === file);
    if (fileWrapper) {
      fileWrapper.status = status;
      fileWrapper.progress = progress;
      fileWrapper.error = error;
      this.onChange(this.files.map(f => f.file));
    }
  }

  setFileProgress(file: File, progress: number): void {
    this.updateFileStatus(file, 'uploading', progress);
  }

  setFileUploaded(file: File): void {
    this.updateFileStatus(file, 'uploaded', 100);
  }

  setFileError(file: File, error: string): void {
    this.updateFileStatus(file, 'error', 0, error);
  }

  retryFile(file: File): void {
    const fileWrapper = this.files.find(fw => fw.file === file);
    if (fileWrapper) {
      const extensionError = this.isInvalidFileExtension(file);
      const sizeError = this.isInvalidFileSize(file);

      if (!extensionError && !sizeError) {
        this.updateFileStatus(file, 'ready', 0);
        this.validFileType = true; // Если ошибки исправлены, валидность восстанавливается
      } else {
        const error = extensionError || sizeError || 'Unknown error';
        this.setFileError(file, error);
        this.invalidFile.emit({ file, error });
        this.validFileType = false; // Валидность остается false при повторении ошибки
      }
    }
  }

  openFileDialog(): void {
    this.fileInput.nativeElement.click();
  }

  writeValue(files: File[]): void {
    if (files) {
      this.files = files.map(file => ({
        file,
        status: 'ready' as const,
        progress: 0,
      }));
    } else {
      this.files = [];
    }
  }

  registerOnChange(fn: (files: File[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.fileInput.nativeElement.disabled = isDisabled;
  }
}
