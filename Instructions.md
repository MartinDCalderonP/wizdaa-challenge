## Hook (useStopwatch)

- Tracks elapsed time in seconds.
- Provides functions to start, stop, and reset the stopwatch.
- Returns the current time in seconds and a formatted minutes:seconds string.

## Component (StopwatchComponent)

- Displays the current elapsed time in minutes:seconds format.
- Renders Start, Stop, and Reset buttons to control the stopwatch.
  - **Start**: starts the timer.
  - **Stop**: pauses the timer.
  - **Reset**: sets the time back to 0.

## Next.js Setup

- Place the `StopwatchComponent` in a page (e.g., `pages/stopwatch.js`) so that it can be accessed by navigating to `/stopwatch` in the browser.
