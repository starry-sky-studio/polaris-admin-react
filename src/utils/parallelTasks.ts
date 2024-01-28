/**
 * 并发执行任务
 * @param {"Function()"} tasks
 * @param {Number} parallelCount
 */

export function parallelTask(tasks: Promise<void>[], parallelCount = 2) {
  return new Promise<void>((resolve) => {
    if (tasks.length === 0) {
      resolve()
      return
    }
    let nextIndex = 0
    let finishCount = 0 // 记录任务完成的数量
    function _run() {
      // 运行下一个任务
      const task = tasks[nextIndex]
      nextIndex++
      task.then(() => {
        finishCount++
        //还有下一个
        if (nextIndex < tasks.length) {
          _run()
        }
        //没有下一个 而且 都运行完了
        else if (finishCount === tasks.length) {
          resolve()
        }
      })
    }
    for (let i = 0; i < parallelCount && i < tasks.length; i++) {
      _run()
    }
  })
}
