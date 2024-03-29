import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { NuverialButtonComponent } from '../button';
import { NuverialIconComponent } from '../icon/icon.component';

export enum UnsavedStepModalReponses {
  SaveAndContinue = 'saveAndContinue',
  ProceedWithoutChanges = 'proceedWithoutChanges',
}

@UntilDestroy()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatDialogModule, NuverialButtonComponent, NuverialIconComponent],
  selector: 'nuverial-unsaved-step-modal',
  standalone: true,
  styleUrls: ['./unsaved-step-modal.component.scss'],
  templateUrl: './unsaved-step-modal.component.html',
})
export class UnsavedStepModalComponent {
  constructor(public dialog: MatDialogRef<UnsavedStepModalComponent>) {}

  public saveAndContinue(): void {
    this.dialog.close(UnsavedStepModalReponses.SaveAndContinue);
  }

  public proceedWithoutChanges(): void {
    this.dialog.close(UnsavedStepModalReponses.ProceedWithoutChanges);
  }
}
