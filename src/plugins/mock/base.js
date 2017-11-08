import {mock, Random} from 'mockjs'

mock(/getBase/, ({url}) => {
  return {
    userName: Random.cname()
  }
})
