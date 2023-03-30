defmodule GitpodWeb.SvelteLive do
  use GitpodWeb, :live_view

  def render(assigns) do
    ~H"""
    <LiveSvelte.render name="Example" props={%{number: @number}} />
    <LiveSvelte.render name="Shoelace" ssr={false} />
    <.input name="check" type="checkbox" value="true" />
    <.sl_input name="check" type="checkbox" value="true" indeterminate />
    """
  end

  def handle_event("set_number", %{"number" => number}, socket) do
    {:noreply, assign(socket, :number, number)}
  end

  def mount(_params, _session, socket) do
    {:ok, assign(socket, :number, 5)}
  end
end
