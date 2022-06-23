/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

<header>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg shadow-md py-2 bg-zinc-900 relative flex items-center w-full justify-between"
  >
    <div class="px-6 w-full flex flex-wrap items-center justify-between">
      <h1 class="text-xl text-zinc-50">R🪐🌎 M</h1>
      <div
        class="items-center ml-4 content-end"
        id="navbarSupportedContentY"
      >
        <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
          <li class="nav-item">
            <a
              class="nav-link block pr-2 lg:px-2 py-2 text-zinc-50 hover:text-blue-400 focus:text-blue-400 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Lib</a
            >
          </li>
          <li class="nav-item mb-2 lg:mb-0">
            <a
              class="nav-link block pr-2 lg:px-2 py-2 text-zinc-50 hover:text-blue-400 focus:text-blue-400 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Config</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->

  <!-- Jumbotron -->
  <div class="text-center bg-neutral-700 text-zinc-50 py-20 px-6">
    <h1 class="text-5xl font-bold mt-0 mb-6">Continue</h1>
    <h3 class="text-3xl font-bold mb-8">Subeading</h3>
    <a
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      href="#!"
      role="button"
      >Get started</a
    >
  </div>
  <!-- Jumbotron -->
</header>
