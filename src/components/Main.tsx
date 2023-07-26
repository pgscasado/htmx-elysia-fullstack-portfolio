import render, { Children } from '@core/render';
import Base from './Base';
import Navbar from './Navbar';

export default ({ children }: Children ) => (
  <Base>
    <body class="w-full h-screen">
      <Navbar />
      <div class="flex flex-col text-sm mx-auto container w-[50vw]">
        <h1>Teste</h1>
        <button class="button bg-purple-500 text-white" hx-post='/clicked' hx-swap='outerHTML'>Click-me</button>
        {children}
      </div>
    </body>
  </Base>
)