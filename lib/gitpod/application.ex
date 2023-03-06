defmodule Gitpod.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      GitpodWeb.Telemetry,
      # Start the Ecto repository
      Gitpod.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Gitpod.PubSub},
      # Start Finch
      {Finch, name: Gitpod.Finch},
      # Start the Endpoint (http/https)
      GitpodWeb.Endpoint
      # Start a worker by calling: Gitpod.Worker.start_link(arg)
      # {Gitpod.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Gitpod.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    GitpodWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
