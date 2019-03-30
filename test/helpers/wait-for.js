export const waitForPredicate = (predicate, timeout = 1000) => {
  const inner = async (start) => {
    if (now() - start > timeout) throw new Error('Timed out')
    if (predicate()) return
    await sleep(1)
    return waitForPredicate(start)
  }
  return inner(predicate, timeout, now())
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const now = () => {
  return (new Date()).getTime()
}
