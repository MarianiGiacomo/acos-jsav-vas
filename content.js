'use-strict'

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
  heap_build: {
    head: `
    <link rel="stylesheet" href="/static/jsav-vas/style/heapPRO.css" type="text/css" />
    <script src="/static/jsav-vas/js/binaryheap.js"></script>
    `,
    body: `
    <div id="container">
      <table class="proHeaderTable">
        <tr>
          <td class="headerLeft"></td>
          <td class="headerCenter">
            <p class="jsavexercisecontrols"></p>
          </td>
        </tr>
      </table>
      <form class="avcontainer">
        <h1>Heap Build Proficiency Exercise</h1>
        <p class="instructLabel">Instructions</p>
        <p class="instructions">
            In this exercise, your task is to run the build-heap
            algorithm on the heap. The min-heap is visualized both as
            a binary tree and array and the exercise can be completed
            by swapping keys in either visualization. You can swap two
            elements by first clicking on one element and then
            another.
        </p>
        <p style="text-align: center">
          <span class="jsavscore"></span>
        </p>
        <div id="av" class="jsavcanvas">
        </div>
      </form>
    </div>
    `,
    exercise_js: `heapBuildPRO.js`
  }
}

module.exports = Content