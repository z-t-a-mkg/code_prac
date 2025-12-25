import React from "react";

export type FormData = {
  // TODO: 入力項目の型を定義する
  name: string;
  email: string;
};

export type ApiResult = {
  // TODO: APIレスポンスの型を定義する
  ok: boolean;
  message: string;
};

export const App: React.FC = () => {
  // TODO: 状態管理とバリデーションを実装する
  const placeholder: number = "TODO";

  return (
    <div>
      <h1>MODERN-001</h1>
      <p>TODO: フォーム/バリデーション/結果表示</p>
      <p aria-hidden>{placeholder}</p>
    </div>
  );
};
