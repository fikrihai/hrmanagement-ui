<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">

		<div v-if="!is_expanded">
			<div class="logo"><router-link to="/" class="button">
					<img :src="logoURL" alt="Vue" />
				</router-link>
			</div>
		</div>
		<div v-else class="logo">
			<router-link to="/" class="navbar-brand">
				HR management
			</router-link>
		</div>


		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<font-awesome-icon icon="fa-solid fa-bars" style="color: #f7f7f7;" />
			</button>
		</div>
		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<font-awesome-icon icon="fa-solid fa-house" style="color: #ffffff;" />
				<span class="text">Home</span>
			</router-link>
		</div>
		<br>
		<h3>Transaction</h3>
		<div class="menu">
			<router-link to="/create" class="button">
				<font-awesome-icon icon="fa-solid fa-file-circle-plus" style="color: #ffffff;" />
				<span class="text">Create</span>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/edit" class="button">
				<font-awesome-icon icon="fa-solid fa-pen-to-square" style="color: #ffffff;" />
				<span class="text">Edit</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)

}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;

			.material-icons {
				font-size: 3rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(10rem);
				}
			}
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		margin-left: 1rem;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>