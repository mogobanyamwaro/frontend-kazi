const today: string = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

function GoodMorning(props?: any) {
  return (
    <div className=" bg-white md:mr-10 h-48 flex flex-col justify-around pl-5">
      <h1 className="text-primary font-bold text-2xl">{today}</h1>
      <p className="text-primary font-bold text-sm">Good Morning,</p>
      <h1 className="text-secondary font-bold text-xl">
        {
          //@ts-ignore
          props.userData.isLive
            ? //@ts-ignore
              props.userData.profile.firstName +
              ' ' +
              //@ts-ignore
              props.userData.profile.lastName
            : 'fill in your first name'
        }
      </h1>
    </div>
  );
}

export default GoodMorning;
