export default function AvatarButton({ imgSrc, handleOnClick }) {
  const DEFAULT_IMG =
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4OTg1OTk0Nw&ixlib=rb-4.0.3&q=80&w=1080';

  return (
    <button
      onClick={handleOnClick}
      className="flex items-center focus:outline-none"
      aria-haspopup="true"
      aria-expanded={handleOnClick}
      aria-label="사용자 메뉴"
    >
      <img
        src={imgSrc || DEFAULT_IMG}
        alt="사용자 아바타"
        className="h-10 w-10 rounded-full object-cover"
      />
    </button>
  );
}
