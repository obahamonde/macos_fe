import { defineStore, acceptHMRUpdate } from "pinia";

export const useStore = defineStore("state", () => {
  const state = reactive({
    user: null as any,
    notifications: [] as {message: string, status: string}[]
  });
  const setState = (newState: any) => {
    Object.assign(state, newState);
  };

  const notify = (noti:any)=>{
    state.notifications.push(noti)
    const audio = new Audio(`/audio/${noti.status}.mp3`)
    audio.play()
    setTimeout(()=>{
        state.notifications.pop()
    }, 5000)
}

  return {
    state,
    setState,
    notify
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
