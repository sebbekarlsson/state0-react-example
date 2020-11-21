export interface IAppProps {
  amount: number;
}

export interface IToastState {
  toasts: string[];
}

export interface IToastRemoveAction {
  toast: string;
}
