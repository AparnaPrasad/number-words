import { ShallowWrapper } from "enzyme"

export const findByAttribute = (wrapper: ShallowWrapper, id: string) => {
    return wrapper.find(`[data-test-id="${id}"]`)
}