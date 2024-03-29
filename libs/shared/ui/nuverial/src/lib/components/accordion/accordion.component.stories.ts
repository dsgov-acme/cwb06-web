import { SharedUtilsLoggingModule } from '@dsg/shared/utils/logging';
import { Meta, applicationConfig, moduleMetadata, StoryFn } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NuverialButtonComponent } from '../button';
import { NuverialAccordionComponent } from './accordion.component';

type StoryType = NuverialAccordionComponent;

export default {
  component: NuverialAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [NuverialButtonComponent],
    }),
    applicationConfig({
      providers: [importProvidersFrom(SharedUtilsLoggingModule.useConsoleLoggingAdapter()), provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  title: 'DSG/Nuverial/Components/Accordion',
} as Meta<NuverialAccordionComponent>;

const Template: StoryFn<StoryType> = args => {
  const panelList: unknown[] = [];
  if (args.panelList) {
    args.panelList?.map(panel => {
      panelList.push(JSON.stringify(panel));
    });
  }

  return {
    props: {
      ...args,
    },
    template: `<nuverial-accordion
        ariaDescribedBy="${args.ariaDescribedBy}"
        [multiExpansion]="${args.multiExpansion}"
        [panelList]=panelList
        ></nuverial-accordion>`,
  };
};

const ProjectionTemplate: StoryFn<StoryType> = args => {
  const panelList: unknown[] = [];
  if (args.panelList) {
    args.panelList?.map(panel => {
      panelList.push(JSON.stringify(panel));
    });
  }

  return {
    props: {
      ...args,
    },
    template: `<nuverial-accordion
        ariaDescribedBy="${args.ariaDescribedBy}"
        [multiExpansion]="${args.multiExpansion}"
        [panelList]=panelList
        >
          <ng-template let-panel #body>
            <nuverial-button buttonStyle="outlined" ariaLabel="testing" colorTheme="primary">Primary</nuverial-button>
            <nuverial-button buttonStyle="filled" ariaLabel="testing">Basic</nuverial-button>
            <nuverial-button buttonStyle="text" ariaLabel="testing" colorTheme="warn">Warn</nuverial-button>
            <nuverial-button [loading]="true" ariaLabel="testing" [disabled]="true" buttonStyle="text">Disabled</nuverial-button>
          </ng-template>
        </nuverial-accordion>`,
  };
};

export const TextAccordion = Template.bind({});
TextAccordion.args = {
  ariaDescribedBy: '',
  multiExpansion: true,
  panelList: [
    {
      disabled: false,
      panelContent: 'Regular Panel Content in the an accordion here is some lorem ipsum...Lorem Ipsum dolor sit amet consectetur adipiscing elit',
      panelTitle: 'First Panel Example',
    },
    {
      disabled: false,
      panelContent:
        'Second example of some panel content along with some lorem ipsum...Lorem Ipsum dolor sit amet consectetur adipiscing elit sit amet consectetur adipiscing elit',
      panelDescription: 'A brief description',
      panelTitle: 'Second Panel Example',
    },
    {
      disabled: true,
      panelTitle: 'Third Example Disabled',
    },
  ],
};

export const ProjectionAccordion = ProjectionTemplate.bind({});
ProjectionAccordion.args = {
  ariaDescribedBy: '',
  multiExpansion: true,
  panelList: [
    {
      disabled: false,
      panelContent: 'Regular Panel Content in the an accordion here is some lorem ipsum...Lorem Ipsum dolor sit amet consectetur adipiscing elit',
      panelTitle: 'First Panel Example',
    },
  ],
};
