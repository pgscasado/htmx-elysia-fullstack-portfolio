import render from '@core/render';
import { Navbar } from '@components';
import { Base } from '@pages';

export default () => (
  <Base>
    <Navbar active='about'/>
    <div class='flex flex-col text-sm mx-auto container w-[50vw]'>
      <h1 class='text-4xl font-bold'>About</h1>
      <p class='text-lg'>This is the about page</p>
    </div>
  </Base>
)