{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.bun
  ];
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "oven.bun-vscode"
    "YoavBls.pretty-ts-errors"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
