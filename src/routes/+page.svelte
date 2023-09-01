<script lang="ts">
	import { goto } from '$app/navigation';
	import Name from '$lib/components/modals/Name.svelte';
	import { gun } from '$lib/gun/gunStore';
	import { name } from '$lib/gun/localstore';
	import { Card, Button, Toggle, Toast, A } from 'flowbite-svelte';
	import { generateUsername } from 'unique-username-generator';

	let nameModal = false;
	let ShowToast = false;
	async function onNameSubmit(e) {
		$name = e.detail.name;
		// Create a instant room
		const roomName = generateUsername('-') + '-' + Math.floor(Math.random() * 999);
		// check if room exists
		// poker.room.name
		const exists = await gun.get('poker').get('room').get(roomName);
		if (exists) {
			console.warn('Room with this name is existing, try to generate a new one');
			// this could be bad, but we generate a new hopefully unique name
			onNameSubmit(e);
		}

		goto(`/room/${roomName}`);
	}
</script>

<Toast open={ShowToast}>
	<svg
		slot="icon"
		aria-hidden="true"
		class="w-5 h-5"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
			clip-rule="evenodd"
		></path></svg
	>
	Set yourself free.
</Toast>
<h1 class="text-4xl p-4">Smoother and Faster Scrum Poker Planning.</h1>
<p class="py-4 text-xl">
	Plan and estimate your projects seamlessly with free Scrum poker rooms. No ads, no costs, just
	create an instant room and make your planning easier
</p>
<Name on:submit={onNameSubmit} show={nameModal} />
<Button on:click={() => (nameModal = true)} class="mb-8">Create Instant Room</Button>
<div class="flex-row space-y-6">
	<Card
		img="/images/undraw/01undraw_preparation_re_t0ce.svg"
		class="text-left m-2 card mr-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			1. Preparation
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Before the Scrum Poker session, the product backlog should be ready, and user stories or tasks
			that need to be estimated are identified. These user stories should have been well-defined and
			broken down into smaller, manageable pieces.
		</p>
	</Card>
	<Card
		img="/images/undraw/02undraw_team_spirit_re_yl1v.svg"
		class="text-left m-2 card ml-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			2. Team Setup
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The Scrum team, including the Product Owner, Scrum Master, and development team members,
			gather for the estimation session. The ideal team size is usually between five to nine members
			to ensure effective collaboration.
		</p>
	</Card>
	<Card
		img="/images/undraw/03undraw_professor_re_mj1s.svg"
		class="text-left m-2 card mr-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			3. Estimation Process
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The Scrum Poker session typically starts with the Product Owner or Scrum Master presenting a
			user story or task that needs to be estimated. Each user story is discussed to ensure that all
			team members understand its requirements and scope.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 card ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			4. Poddle Poker
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			To facilitate the estimation process, you can create a room and share the link with our team.
			If you have trouble to find a timeslot for your session. You can try out our Doodle
			alternative at <A href="https://poddle.network" target="_blank">poddle.network</A>
		</p>
	</Card>
	<Card
		img="/images/undraw/05undraw_election_day_w842.svg"
		class="text-left m-2 card mr-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			5. Individual Estimation
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Once the user story is understood, each team member privately selects a Planning Poker card
			representing their estimation of the effort required to complete the task. The results are
			hidden until the estimation round is complete.
		</p>
	</Card>
	<Card
		img="/images/undraw/06undraw_conversation_re_c26v.svg"
		class="text-left m-2 card ml-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			6. Reveal and Discussion
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			After everyone has chosen a card, the results are displayed by a button click. If there is a
			consensus (i.e., all team members selected the same card), that becomes the final estimation.
		</p>
	</Card>
	<Card
		img="/images/undraw/07undraw_meeting_re_i53h.svg"
		class="text-left m-2 card mr-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			7. Discussion of Divergent Estimations
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			If there is a wide range of estimations, the team engages in a discussion to understand the
			reasoning behind the various estimates. This discussion helps identify any misunderstandings,
			risks, or additional considerations related to the user story.
		</p>
	</Card>
	<Card img="/images/undraw/08undraw_voting_nvu7.svg" class="text-left m-2 card ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			8. Re-Estimation (Optional)
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Based on the discussion, team members may revise their initial estimations and select new
			cards. The process of discussion and re-estimation continues until a consensus is reached, or
			until the team decides to escalate the issue to the Product Owner for clarification.
		</p>
	</Card>
	<Card
		img="/images/undraw/09undraw_add_content_re_vgqa.svg"
		class="text-left m-2 card mr-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			9. Recording the Estimations
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The final estimation agreed upon by the team is recorded for the user story. It's important to
			document these estimates for future reference, planning, and tracking progress.
		</p>
	</Card>
	<Card
		img="/images/undraw/10undraw_step_to_the_sun_nxqq.svg"
		class="text-left m-2 card ml-auto"
		horizontal
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			10. Next User Story
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The process continues with the next user story or task in the backlog until all items are
			estimated.
		</p>
	</Card>
</div>

<style>
	:global(.card > img) {
		height: fit-content;
		margin-top: auto;
		margin-bottom: auto;
	}
</style>
