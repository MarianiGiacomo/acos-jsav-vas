# acos-jsav-vas
Acos-server content package for visual algorithm simulation exercises implemented with JSAV library. For tutorials on how to create exercises with the JSAV library please refer to the [JSAV documentation](http://jsav.io/) and the [JSAV repo](https://github.com/vkaravir/JSAV).

To use this packge you first need to install the [acos-jsav](https://github.com/MarianiGiacomo/acos-jsav) content type package.

## Adding new exercises
New JSAV visual algorithm simulation exercises can be configured in `/content.js` like:

```
const Content = {
  insertion_sort: {
    head: ``,
    body: `
    <div id="jsavcontainer">
      <h1>Title</h1>
      <p class="instructLabel">Instructions:</p>
      <p class="instructions">
      Instructions here
      </p>
      <p align="center" class="jsavexercisecontrols"></p>
      <p class="jsavscore"></p>
      <ol id="exerArray"></ol>
    </div>
    `,
    exercise_js: `insertionSort.js`
  },
  ...
```

`head`: Here you can place tags that will be inserted in the `<head>` tag of the exercise page, like for example extra libraries or stylesheets

`body`: Here you can place the HTML of the exercise, it will be inserted in the `<body>` tag of the exercise page.

`exercise_js`: The name of the actual exercise JavaScript code file that uses the JSAV library to create the exercise. You **must place the file in** `/static/exercises/`.


## Static files
Static files should be placed in the `/static` folder, and can be accessed from for example a `<script>` tag with `/statis/jsav-vas/<your_file_in_static_folder`. Ideally stylesheets should be placed under `static/style` and JavaScript files under `static/js`, but it is up to you where you place them, since you will have to refer to them using their full path in the `static` folder. The exercise file that uses the JSAV library to create the exercises **must place the file in** `/static/exercises/`.

## Exercise grading
The `acos-jsav` package listens for `jsav-log-event` and when a `jsav-exercise-grade` is detected, it extracts the points and sends them to acos-server.
