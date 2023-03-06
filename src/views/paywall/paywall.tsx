import React from 'react'

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
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 overflow-y-auto paragraph px-4"></div>
        </div>
      </div>
    </div>
  )
}
