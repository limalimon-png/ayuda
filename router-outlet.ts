//en el app routing module


const routes: Routes =[{
`RH: 'AUTH',
LOADcHILDREN: () => IMPORT('./AUTH/AUTH.MODULE').then(m =>m.AuthModule)
}]


//en el auth.routing.mofule
const routes: Routes=[{

path:"",
component: authPagesCompoent,
cjildren:[
{
path:'nre-lost',
componentent:LostPagecomponent},
{
path:'otra cosa',
component:'otraCosaComponent'}
]
}]

//Estructura de carpteras para el routerLink
una carpeta con el authPages para que sea la base dela pagina y las restantes son las que van a ir dentro de esa pagina
