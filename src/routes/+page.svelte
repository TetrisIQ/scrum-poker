<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';
</script>

<h1 class="text-4xl p-4">Smoother and Faster Scrum Poker Planning.</h1>
<p class="py-4">
	Plan and estimate your projects seamlessly with free Scrum poker rooms. No ads, no costs, just
	instant set-up and future planning made easier
</p>
<Button class="mb-8">Create Instant Room</Button>
<div class="flex-row">
	<Card img="/favicon.png" class="text-left m-2  mr-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			1. Preparation
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Before the Scrum Poker session, the product backlog should be ready, and user stories or tasks
			that need to be estimated are identified. These user stories should have been well-defined and
			broken down into smaller, manageable pieces.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			2. Team Setup
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The Scrum team, including the Product Owner, Scrum Master, and development team members,
			gather for the estimation session. The ideal team size is usually between five to nine members
			to ensure effective collaboration.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 mr-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			3. Estimation Process
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The Scrum Poker session typically starts with the Product Owner or Scrum Master presenting a
			user story or task that needs to be estimated. Each user story is discussed to ensure that all
			team members understand its requirements and scope.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			4. Deck of Cards
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			To facilitate the estimation process, a set of special cards, often called Planning Poker
			cards, are used. These cards usually have numerical values representing relative effort,
			complexity, or story points. The values typically include numbers like 0, 1, 2, 3, 5, 8, 13,
			20, 40, 100, and "Infinity."
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 mr-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			5. Individual Estimation
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Once the user story is understood, each team member privately selects a Planning Poker card
			representing their estimation of the effort required to complete the task. The cards are kept
			face down until the estimation round is complete.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			6. Reveal and Discussion
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			After everyone has chosen a card, the team members simultaneously reveal their cards. If there
			is a consensus (i.e., all team members selected the same card), that becomes the final
			estimation.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 mr-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			7. Discussion of Divergent Estimations
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			If there is a wide range of estimations, the team engages in a discussion to understand the
			reasoning behind the various estimates. This discussion helps identify any misunderstandings,
			risks, or additional considerations related to the user story.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			8. Re-Estimation (Optional)
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Based on the discussion, team members may revise their initial estimations and select new
			cards. The process of discussion and re-estimation continues until a consensus is reached, or
			until the team decides to escalate the issue to the Product Owner for clarification.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 mr-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			9. Recording the Estimations
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The final estimation agreed upon by the team is recorded for the user story. It's important to
			document these estimates for future reference, planning, and tracking progress.
		</p>
	</Card>
	<Card img="/favicon.png" class="text-left m-2 ml-auto" horizontal>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			10. Next User Story
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The process continues with the next user story or task in the backlog until all items are
			estimated.
		</p>
	</Card>
</div>
