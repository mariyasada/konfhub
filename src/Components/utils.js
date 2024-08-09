const eventStartDate = new Date("July 31, 2034 06:00:00").getTime();
const eventEndDate = new Date("August 31, 2034 18:00:00").getTime();

export const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const distance = eventEndDate - now;

  if (distance < 0) {
    return "Event has passed.";
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // 1000 milisceonds * 60 minutes *60 seconds * 24hours // 1 day=24×60×60×1000
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) // leftover miliseconds
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
};
