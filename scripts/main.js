Events.on(ServerLoadEvent, () => {
    Log.info("JSJSEval loaded!")
    Vars.netServer.clientCommands["register(java.lang.String,java.lang.String,java.lang.String,arc.util.CommandHandler$CommandRunner)"](
        "js",
        "<code...>",
        "Runs arbitrary Javascript. Admins only.",
        (args, player) => {
            if (player.admin) {
                player.sendMessage(Vars.mods.scripts.runConsole(args[0]))
            }
            else{
                player.sendMessage("[#ff9999]You are not allowed to use this")
            }
        }
    )
})