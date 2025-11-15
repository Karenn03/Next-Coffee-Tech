import { Icon } from "@iconify/react";

export default function NotificationButton() {
  return (
    <div className="relative inline-block">
      <button
        className="p-2 w-fit h-fit flex items-center justify-center rounded-full hover:bg-gray-200 transition"
        aria-label="more than 99 notifications"
      >
        <Icon icon="ph:bell-simple-bold" width="24" height="24" />
      </button>
      <span className="absolute -top-0.5 -right-0.5">
        <span className="relative flex">
          <span className="bg-red-400 border-2 border-transparent rounded-full w-3.5 h-3.5"></span>
          <span className="absolute inset-0 bg-red-400 rounded-full animate-ping"></span>
        </span>
      </span>
    </div>
  );
}
