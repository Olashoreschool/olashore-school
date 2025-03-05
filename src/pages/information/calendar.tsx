import { Dialog, Transition } from "@headlessui/react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import moment from "moment";
import { InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import { Fragment, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface MyEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const localizer = momentLocalizer(moment);

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "event";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const MyCalendar = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [events, setEvents] = useState<MyEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);

  useEffect(() => {
    const formattedEvents: MyEvent[] = data.map((event: MyEvent) => ({
      ...event,
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
    }));

    setEvents(formattedEvents);
  }, [data]);

  const handleEventClick = (event: MyEvent) => {
    setSelectedEvent(event);
  };

  const handleCloseDialog = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <NextSeo title="Calendar - Olashore International School" />

      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <h2 className="font-bold my-10 text-xl lg:text-2xl text-center">
          Event Calendar
        </h2>
        <div style={{ height: "500px" }}>
          <Calendar<MyEvent>
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleEventClick}
          />

          {selectedEvent && (
            <EventDialog
              event={selectedEvent}
              closeModal={handleCloseDialog}
              isOpen={!!selectedEvent}
            />
          )}
        </div>
      </section>
    </>
  );
};

interface EventDialogProps {
  event: MyEvent;
  closeModal: () => void;
  isOpen: boolean;
}

const EventDialog: React.FC<EventDialogProps> = ({
  event,
  closeModal,
  isOpen,
}) => {
  const { start, end, title } = event;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="overflow-scroll w-full max-w-lg transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-8">
                  <p>
                    Start Date: {moment(start).format("MMMM DD, YYYY h:mm A")}
                    <br />
                    End Date: {moment(end).format("MMMM DD, YYYY h:mm A")}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <AddToCalendarButton
                    name={title}
                    options={[
                      "Apple",
                      "Google",
                      "Microsoft365",
                      "Yahoo",
                      "iCal",
                    ]}
                    location="World Wide Web"
                    startDate={moment(start).format("YYYY-MM-DD")}
                    endDate={moment(end).format("YYYY-MM-DD")}
                    startTime={moment(start).format("HH:mm")}
                    endTime={moment(end).format("HH:mm")}
                    trigger="click"
                    hideBackground
                  ></AddToCalendarButton>

                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#faddc3] px-4 py-3 text-sm font-medium text-black hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MyCalendar;
