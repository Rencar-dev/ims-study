import Obsever from './Observer'

interface Subject {
  register: (observer: Obsever) => void
  remove: (observer: Obsever) => void
  notify: () => void
}

export default Subject
