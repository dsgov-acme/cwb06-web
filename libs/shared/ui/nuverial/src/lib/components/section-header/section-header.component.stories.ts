import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { NuverialSectionHeaderComponent } from './section-header.component';

export default {
  component: NuverialSectionHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {},
  tags: ['autodocs'],
  title: 'DSG/Nuverial/Components/SectionHeader',
} as Meta<NuverialSectionHeaderComponent>;

const Template: StoryFn<NuverialSectionHeaderComponent> = args => {
  return {
    args,
    template: `
    <nuverial-section-header>
      <div nuverialCardContentType="label">Section Header</div>
    </nuverial-section-header>`,
  };
};

export const Card = Template.bind({});
Card.args = {};
