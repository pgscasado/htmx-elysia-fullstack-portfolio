import render from '@core/render'

export default () => (
  <nav class="
    flex flex-row justify-end 
    px-3 
    [&>*]:py-2 [&>*]:px-2 [&>*]:block [&>*]:h-full
    [&>*:hover]:bg-gray-300 [&>*:hover]:text-pink-400
  ">
    <div>
      <a href="/">Home</a>
    </div>
    <div>
      <a href="/about">About</a>
    </div>
    <div>
      <a href="/contact">Contact</a>
    </div>
    <div>
      <a href="/projects">Projects</a>
    </div>
  </nav>
)