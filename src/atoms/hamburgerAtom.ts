import {atom } from 'recoil'

export interface MenuState {
  isOpen: boolean,
}

const defaultMenuState: MenuState = {
  isOpen: false
}

export const menuState = atom<MenuState>({
  key: 'menuState',
  default: defaultMenuState
})
