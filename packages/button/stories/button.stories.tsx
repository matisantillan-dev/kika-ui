import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { Button } from "../src/button"

export default {
  title: "Button",
  decorators: [
    (Story: any) => (
      <div style={{ marginTop: "40px" }}>
        <Story />
      </div>
    ),
  ],
}

export const Basic = () => (
  <>
    <Button color={"#3866a3"}>Click me!</Button>

    <Button color={"#7928ca"}>Click me!</Button>

    <Button color={"#17c964"}>Click me!</Button>

    <Button color={"#f5a623"}>Click me!</Button>

    <Button color={"#f21361"}>Click me!</Button>
  </>
)

export const outline = () => (
  <>
    <Button color={"#3866a3"} variant="outline">
      Click me!
    </Button>

    <Button color={"#7928ca"} variant="outline">
      Click me!
    </Button>

    <Button color={"#17c964"} variant="outline">
      Click me!
    </Button>

    <Button color={"#f5a623"} variant="outline">
      Click me!
    </Button>

    <Button color={"#f21361"} variant="outline">
      Click me!
    </Button>
  </>
)

export const WithVariants = () => (
  <>
    <Button variant="outline" color={"#3866a3"}>
      Click me!
    </Button>

    <Button variant="solid" color={"#3866a3"}>
      Click me!
    </Button>
  </>
)
