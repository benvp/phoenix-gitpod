defmodule GitpodWeb.PageController do
  use GitpodWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
