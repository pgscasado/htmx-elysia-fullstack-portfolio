import render from '@core/render';
import { Navbar } from '@components/Navbar';
import { Base } from '@pages';

export default () => (
  <Base>
    <Navbar active='contact'/>
    <div class='flex flex-col text-sm mx-auto container w-[50vw]'>
      <h1 class='text-4xl font-bold'>Contact</h1>
      <p class='text-lg'>This is the contact page</p>
    </div>
  </Base>
)