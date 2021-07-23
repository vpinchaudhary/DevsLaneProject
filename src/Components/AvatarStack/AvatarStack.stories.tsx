import AvatarStack, { Props } from './AvatarStack'
import { Meta, Story } from '@storybook/react'
import '../../index.css'

export default {
  component: AvatarStack,
  title: 'Components/AvatarStack',
} as Meta

const Template: Story<Props> = (args) => <AvatarStack {...args} />

export const Primary = Template.bind({})

Primary.args = {
  result: 10,
}
