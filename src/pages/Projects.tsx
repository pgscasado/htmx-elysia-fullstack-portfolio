import { Navbar } from '@components';
import render from '@core/render';
import { Base } from '@pages';

export default () => (
  <Base>
    <Navbar active='projects'/>
    <div class='flex flex-col text-sm mx-auto container w-[50vw]'>
      <h1 class='text-4xl font-bold'>Projects</h1>
      <p class='text-lg'>This is the projects page</p>
    </div>
  </Base>
)