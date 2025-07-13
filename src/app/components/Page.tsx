export default function Page({ name, url, selected }) {
  console.log(name);
  console.log(url);
  return (
    <a
      className={`page flex py-[10px] px-[20px] border
        rounded-[5px] hover:border-(--primary-blue) hover:text-(--primary-blue)
        ${selected ? 'border-(--primary-blue) text-(--primary-blue)' : ''}`}
      href={url}
    >
      {name}
    </a>
  );
}
