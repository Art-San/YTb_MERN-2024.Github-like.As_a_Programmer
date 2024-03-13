// 3:51:30 закончил перед деплоем
import { useState, useEffect, useCallback } from 'react'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'

import toast from 'react-hot-toast'
import Spinner from '../components/Spinner'
const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  const [sortType, setSortType] = useState('recent')

  const getUserProfileAndRepos = useCallback(
    async (username = 'burakorkmez') => {
      setLoading(true)

      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const { userProfile, repos } = await res.json()

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) //descending, recent first

        setUserProfile(userProfile)
        setRepos(repos)

        return { userProfile, repos }
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    getUserProfileAndRepos()
  }, [getUserProfileAndRepos])

  const onSearch = async (e, username) => {
    e.preventDefault()
    setLoading(true)
    setRepos([])
    setUserProfile(null)

    const { userProfile, repos } = await getUserProfileAndRepos(username)
    console.log(2, 'userProfile', userProfile.avatar_url)

    setUserProfile(userProfile)
    setRepos(repos)
    setLoading(false)
    setSortType('recent')
  }

  const onSort = (sortType) => {
    console.log('sortType', sortType)
    if (sortType === 'recent') {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) //descending, recent first
    } else if (sortType === 'stars') {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count) //descending, most stars first
    } else if (sortType === 'forks') {
      repos.sort((a, b) => b.forks_count - a.forks_count) //descending, most forks first
    }
    setSortType(sortType)
    setRepos([...repos])
  }

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {/* 1:39:20 */}
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {/* <ProfileInfo userProfile={userProfile} /> */}

        {/* 1:20:20 */}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  )
}
export default HomePage
