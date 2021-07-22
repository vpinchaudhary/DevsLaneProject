import ProgressBar, { Props } from './ProgressBar'
import { Meta, Story } from '@storybook/react'
import '../../index.css'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    width: {
      control: { type: 'range' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <ProgressBar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  theme: 'blue',
  width: 60,
  size: 'medium',
  gradient: false,
}
