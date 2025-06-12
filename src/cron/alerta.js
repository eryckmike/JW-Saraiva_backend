import cron from 'node-cron'
import * as repo from '../repositories/viagemRepositories.js'

cron.schedule('0 8 * * *', async () => {
  const todas = await repo.getAllViagens()
  const hoje3 = new Date(Date.now() + 3*24*60*60*1000).toDateString()
  todas
    .filter(v => v.dataVolta.toDateString() === hoje3)
    .forEach(v => {
      console.log(`[ALERTA] Faltam 3 dias para retorno da viagem ${v.id}`)
      // aqui dispare e-mail/push via serviço de notificação
    })
})
