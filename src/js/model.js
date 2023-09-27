const model = {
    app: {
        currentPage: "home",
        currentDay: new Date(),
    },
    inputs: {
        dayView: {
            tasks: [
                {
                    id: 1,
                    //Blir brukt for å finne ut om det kan utsettes
                    isDone: false,
                },
            ],
            maxTasks: 3,
            intensity: 1,
        },
        weekView: {
            maxTasks: 5,
            intesity: 5,
        },
        monthView: {
            maxTasks: 10,
            intesity: 10,
        },
        newTaskPage: {
            taskName: null,
            intensity: null,
            interval: null,
            taskDueDate: null,
        },
        editTaskPage: {
            taskName: null,
            intensity: null,
            interval: null,
            taskDueDate: null,
        },
    },
    // data
    tasks: {
        recurringTasks: [
            // Du får varsel hver gang du skal gjøre disse
            {
                id: 1,
                name: "Ta oppvasken",
                interval: 3,
                intensity: 1,
                nextDueDate: Date("2023-08-28"),
                canShift: true,
            },
            {
                id: 2,
                name: "Avtale tid for løpetur med Berit",
                interval: 14,
                intensity: 1,
                nextDueDate: Date("2023-08-26"),
                canShift: false,
            },
            {
                id: 3,
                name: "Gå morgentur med hunden",
                interval: 1,
                intensity: 1,
                nextDueDate: Date("2023-08-26"),
                canShift: false,
            },
            {
                id: 4,
                name: "Gå ettermiddagstur med hunden",
                interval: 1,
                intensity: 1,
                nextDueDate: Date("2023-08-26"),
                canShift: false,
            },
            {
                id: 5,
                name: "Pisse på graven til Ivar Aasen",
                interval: 1,
                intensity: 10,
                nextDueDate: Date("2023-08-26"),
                canShift: false,
            },
            {
                id: 6,
                name: "Ta en Dusj",
                interval: 1,
                intensity: 1,
                nextDueDate: Date("2023-08-26"),
                canShift: true,
            },
        ],
        singleUseTasks: [
            {
                // Eksempel på brukerdefinert engangsgjøremål
                id: 7,
                name: "Forbrede til familietreffet",
                isDone: false,
                intensity: 3,
                fromDate: Date("2023-08-23"), //du får ikke oppgaven utgitt på en dag før dette
                toDate: Date("2023-08-25"), //du får ikke oppgaven utgitt på en dag etter dette, og den blir prioritert når det nærmer seg
            },
            {
                // Eksempel på
                id: 8,
                name: "Avtale tid for løpetur med Berit",
                isDone: false,
                intensity: 1,
                fromDate: Date("2023-08-28"),
                toDate: Date("2023-08-28"),
            },
        ],
    },
    calendar: {
        "2023-08-27": {
            tasks: [
                { id: 1, isDone: false },
                { id: 3, isDone: false },
                { id: 5, isDone: true },
                { id: 6, isDone: true },
                { id: 7, isDone: false },
            ],
            maxIntensity: 1,
            maxTasks: 4,
        },
        "2023-08-28": {
            tasks: [
                { id: 1, isDone: false },
                { id: 3, isDone: false },
                { id: 5, isDone: false },
                { id: 6, isDone: false },
            ],
            maxIntensity: 4,
            maxTasks: 3,
        },
    },
};

//  let date = new Date();
//  let dateString = date.toISOString().slice(0, 10) -> "2023-09-27"
//  model.calendar[dateString]

// const currentMonth = new Date();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*
 *  - Per side
 *      1. Hvilke data vises her -  og hvordan skal de ligge i
 *         modellen for at vi skal kunne tegne opp siden?
 *
 *      2. Hva kan brukeren gjøre på denne siden - og hvilke
 *         endringer i modellen følger av det?
 */
