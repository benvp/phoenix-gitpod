defmodule Gitpod.Repo do
  use Ecto.Repo,
    otp_app: :gitpod,
    adapter: Ecto.Adapters.Postgres
end
