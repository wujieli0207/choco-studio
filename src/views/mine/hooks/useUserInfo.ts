import { onMounted, ref } from "vue";
import { getUserInfo } from "/@/api/userApi";

const useUserInfo = () => {
  const userNickName = ref("");
  const userAvatar = ref("");

  onMounted(() => {
    loadUserInfo();
  });

  async function loadUserInfo() {
    // TODO 用户Id暂时固定
    const result = await getUserInfo(1);
    userNickName.value = result.userNickName;
    userAvatar.value = result.userAvatar;
  }

  return {
    userNickName,
    userAvatar,
  };
};

export default useUserInfo;
