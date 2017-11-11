/**
 *  修改加载动画显示状态
 * @param  param0 
 * @param  flag 
 */
export const changeLoading = ({ commit }, flag) => {
    commit('changeLoading', flag);
}