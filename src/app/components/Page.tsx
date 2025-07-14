export default function Page({ name, url }) {
  console.log(name);
  console.log(url);
  return (
    <a 
      className={`
        relative 
        after:bg-(--primary-blue)
        after:absolute
        after:h-[2px]
        after:w-0
        after:bottom-0
        after:left-0
        hover:after:w-full
        after:transition-all
        after:duration-300`
      }
      href={url}
    >
      {name}
    </a>
  );
}
