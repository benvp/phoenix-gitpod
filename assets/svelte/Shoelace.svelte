<script>
	import { createDialog } from 'svelte-headlessui'
	import Transition from 'svelte-transition'

	const dialog = createDialog({ label: 'Payment Success' })
</script>

<div class="flex flex-col items-center justify-center w-full">
	<div class="flex flex-col items-center justify-center w-full">
		<div class="fixed inset-0 flex items-center justify-center">
			<button
				type="button"
				class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				on:click={dialog.open}>Open dialog</button
			>
		</div>
	</div>

	<div class="relative z-10">
		<Transition show={$dialog.expanded}>
			<Transition
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25" on:click={dialog.close} />
			</Transition>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex items-center justify-center min-h-full p-4 text-center">
					<Transition
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl" use:dialog.modal>
							<h3 class="text-lg font-medium leading-6 text-gray-900">Payment successful</h3>
							<div class="mt-2">
								<p class="text-sm text-gray-500">
									Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
								</p>
							</div>

							<div class="mt-4">
								<button
									type="button"
									class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
									on:click={dialog.close}
								>
									Got it, thanks!
								</button>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</Transition>
	</div>
</div>