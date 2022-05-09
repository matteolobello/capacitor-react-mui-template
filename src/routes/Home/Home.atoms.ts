import { atom } from "jotai"

import { TabId } from "./Home"

export const tabItemAtom = atom<TabId>("tab1")

export const counterAtom = atom<number>(0)
