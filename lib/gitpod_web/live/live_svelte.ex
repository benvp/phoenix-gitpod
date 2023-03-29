defmodule GitpodWeb.SvelteLive do
  use GitpodWeb, :live_view

  def render(assigns) do
    ~H"""
    <LiveSvelte.render name="Example" props={%{number: @number}} />
    """
  end

  def handle_event("set_number", %{"number" => number}, socket) do
    {:noreply, assign(socket, :number, number)}
  end

  def mount(_params, _session, socket) do
    {:ok, assign(socket, :number, 5)}
  end
end
