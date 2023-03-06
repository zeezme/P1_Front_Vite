import React from 'react'
import GeneralSvg from '../../@core/components/svg/general/general'
import LoginSvg from '../../@core/components/svg/login/loginImage'

export default function PayWall() {
  return (
    <div className="flex flex-1 height-no-header">
      <div className="flex flex-1 overflowhidden ">
        <div className="flex bg-base-100 flex flex-col items-start justify-start w-64 drop-shadow-md ">
          <div className="btn m-2 btn-ghost">Cadastrar Produto</div>
          <div className="btn m-2 btn-ghost">Vender Produto</div>

          <div tabIndex={0} className="collapse">
            <div className="btn m-2 btn-ghost">Administrar Estoque</div>
            <div className="collapse-content">
              <div className="btn m-2 btn-ghost">Inserir</div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="flex overflow-hidden items-center content-center justify-center height-no-header">
            <GeneralSvg />
          </div>
        </div>
      </div>
    </div>
  )
}
